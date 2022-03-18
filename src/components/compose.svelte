<script lang="ts">
    let tweet = ''
    const maxCharacters = 140

    $: charactersLeft = maxCharacters - tweet.length
</script>

<div class="compose">
    <img src="https://gravatar.com/avatar/284cc34a5664be15b079e826efec1ba5?s=400&d=robohash&r=x" alt="Avatar"/>
    <form action="/home" method="post" autocomplete="off">
        <input type="text" name="tweet" bind:value="{tweet}" placeholder="What's your hot take?" aria-label="Enter your tweet"/>
        <button type="submit" class="btn" class:error="{charactersLeft < 0}" disabled="{charactersLeft <= 0}">
            { charactersLeft === maxCharacters ? 'Tweet' : charactersLeft }
        </button>
    </form>
</div>

<style>
	.compose {
		display: grid;
		grid-template-columns: min-content 1fr;
		align-items: center;
		gap: var(--spacing-16);
		padding: var(--spacing-16) var(--spacing-24);
		border-bottom: 1px solid var(--color-border-primary);
	}

	img {
		width: 48px;
		height: 48px;
		border-radius: 50%;
	}

	form {
		display: flex;
		align-items: center;
		gap: var(--spacing-16);
	}

	input {
		color: var(--color-text-primary);
		background-color: transparent;
	}

	button {
		min-width: 80px;
		font-size: var(--font-16);
		padding: var(--spacing-16);
	}

	.error {
		color: tomato;
	}
</style>