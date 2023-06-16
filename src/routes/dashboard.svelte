<script lang="ts">
  import { signOut } from "firebase/auth";
  import {
    collection,
    query,
    where,
    addDoc,
    doc,
    updateDoc,
    deleteDoc,
    onSnapshot,
  } from "firebase/firestore";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { auth, db } from "../lib/firebaseConfig";

  interface Task {
    id: string;
    description: string;
    completed: boolean;
    userId: string;
  }

  let newTask = "";
  let tasks: Task[] = [];

  onMount(async () => {
    const user = auth.currentUser;
    if (!user) {
      goto("/");
    } else {
      const q = query(collection(db, "tasks"), where("userId", "==", user.uid));

      // Using onSnapshot here to listen for changes in real time
      onSnapshot(q, (querySnapshot) => {
        tasks = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Task[];
      });
    }
  });

  const addTask = async () => {
    const user = auth.currentUser;
    if (!user) {
      console.error("User not logged in");
      goto("/");
    } else {
      await addDoc(collection(db, "tasks"), {
        description: newTask,
        completed: false,
        userId: user.uid,
      });
      newTask = "";
    }
  };

  const markTaskAsComplete = async (task: Task) => {
    // Delete the task from the "tasks" collection
    await deleteDoc(doc(db, "tasks", task.id));

    // Add the task to the "completedTasks" collection
    await addDoc(collection(db, "completedTasks"), {
      ...task,
      completed: true,
    });
  };

  const logout = async () => {
    await signOut(auth);
    goto("/");
  };
</script>

<div class="container mx-auto p-8 space-y-8">
  <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
    <div class="lg:col-start-4 lg:col-span-6">
      <form class="space-y-4" on:submit|preventDefault={addTask}>
        <div>
          <label for="task" class="block text-sm font-medium text-gray-700"
            >New task</label
          >
          <input
            class="form-input mt-1 block w-full"
            type="text"
            id="task"
            bind:value={newTask}
            placeholder="New task"
          />
        </div>
        <button type="submit" class="btn variant-filled-primary"
          >Add task</button
        >
        <button
          type="button"
          class="btn variant-filled-secondary"
          on:click={logout}>Logout</button
        >
      </form>

      <div class="mt-6 space-y-4">
        <h2 class="text-lg font-medium text-gray-700">Your Tasks</h2>
        <ul>
          {#each tasks as task (task.id)}
            <li class:completed={task.completed}>
              <span>{task.description}</span>
              <input
                type="checkbox"
                bind:checked={task.completed}
                on:change={() => markTaskAsComplete(task)}
                style="float: right;"
              />
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>
