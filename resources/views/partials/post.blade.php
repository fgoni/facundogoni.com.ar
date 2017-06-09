<div class="card bg-danger" style="margin:20px;">
    <div class="card-block card-outline-secondary  text-left">
        <h4 class="card-title">
            {{ $post->title }}
        </h4>
        <h6 class="card-subtitle mb-2 text-muted">
            {{ $post->updated_at->toDateString() }}
        </h6>
        <p class="card-text">
            {{ $post->body }}
        </p>
    </div>
</div>