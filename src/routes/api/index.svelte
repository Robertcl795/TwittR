
<script>
    export let item
</script>

<h1>{item}</h1>

<form action="/api" method="post">
    <input type="text" name="item" id="item"/>
    <button type="submit" class="btn">Submit</button>
</form>