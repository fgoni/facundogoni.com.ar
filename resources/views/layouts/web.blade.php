<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ config('app.name') }}</title>
    @include('partials.styles')
</head>
<body>

<div class="site-wrapper">
    <div class="site-wrapper-inner">
        <div class="cover-container">
            @include('partials.header')
            <div class="inner cover" id="content">
                @yield('content')
            </div>
            @include('partials.footer')
        </div>
    </div>
</div>
@include('partials.scripts')
</body>
</html>