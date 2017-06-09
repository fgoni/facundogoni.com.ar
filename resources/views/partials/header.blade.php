<div class="masthead clearfix">
    <div class="inner">
        <h3 class="masthead-brand">
            <a href="{{ route('web.home') }}">
                {{ config('app.name') }}
            </a>
        </h3>
        <nav class="nav nav-masthead">
            <a class="nav-link {{ active_route('web.home') }}" href="{{ route('web.home') }}">Home</a>
            <a class="nav-link {{ active_route('web.blog') }}" href="{{ route('web.blog') }}">Blog</a>
            <a class="nav-link {{ active_route('web.newsletter') }}" href="{{ route('web.newsletter') }}" >Newsletter</a>
            <a class="nav-link {{ active_route('web.contact') }}" href="{{ route('web.contact') }}">Contact</a>
        </nav>
    </div>
</div>