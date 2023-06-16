<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import firebase from 'firebase/compat/app';
    import 'firebase/compat/auth';
    import 'firebase/compat/firestore';

    interface Task {
      id: string;
      description: string;
      completed: boolean;
      userId: string;
    }

    let newTask = '';
    let tasks: Task[] = [];

    const db = firebase.firestore();

    onMount(async () => {
      const user = firebase.auth().currentUser;
      if (!user) {
        goto('/');
      } else {
        const querySnapshot = await db.collection('tasks').where('userId', '==', user.uid).get();
        tasks = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Task[];
      }
    });

    const addTask = async () => {
      const user = firebase.auth().currentUser;
      if (!user) {
        console.error('User not logged in');
        goto('/');
      } else {
        await db.collection('tasks').add({
          description: newTask,
          completed: false,
          userId: user.uid
        });
        newTask = '';
      }
    };

    const markTaskAsComplete = async (task: Task) => {
      await db.collection('tasks').doc(task.id).update({
        completed: true,
      });
    };

    const logout = async () => {
      await firebase.auth().signOut();
      goto('/');
    };
</script>

<div class="container">
    <div class="row">
      <div class="one-half column">
        <input class="u-full-width" type="text" bind:value={newTask} placeholder="New task" />
        <button class="button-primary" on:click={addTask}>Add task</button>
        <button class="button-primary logout-button" on:click={logout}>Logout</button>
      </div>
    </div>
  
    <div class="row">
      <div class="one-half column">
        <ul>
          {#each tasks as task (task.id)}
            <li class:completed={task.completed}>
              <input type="checkbox" bind:checked={task.completed} on:change={() => markTaskAsComplete(task)} />
              {task.description}
            </li>
          {/each}
        </ul>
      </div>
    </div>
</div>
