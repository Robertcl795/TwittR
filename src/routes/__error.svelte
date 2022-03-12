<script context="module" lang="ts">
    import type { ErrorLoad } from '@sveltejs/kit';

    export const load: ErrorLoad = ({ error, status }) => {
        return {
            props: {
                title: `${status}: ${error.message}`
            }
        }
    }
</script>

<script lang="ts">
    export let title: string;
</script>

<section class="error">
    <h1>{title}</h1>
    <img src="/error.webp" alt="Ooops!">
</section>

<style>
    .error {
        height: 100vh;
        display: grid;
        gap: var(--spacing-32);
        place-content: center;
        place-items: center;
    }
    img {
        --size: minmax(200px, 400px);
        width:  var(--size);
        height: var(--size);
        object-fit: cover;
    }
</style>