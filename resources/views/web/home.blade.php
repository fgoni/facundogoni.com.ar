@extends('layouts.web')
@section('content')
    <img src="{{ asset('images/profile.jpg') }}" alt="Profile pic" title="Profile pic"
         style="width:96px; height:96px;" class="img-responsive rounded-circle">
    <h1 class="cover-heading">Hi, I'm Facundo Goñi.</h1>
    <div class="text-left">
        <p class="lead">
            I'm a Web Developer from Argentina, I write about modern web development and entrepeneurship.
        </p>
        <p class="lead">
            Currently working on <a href="https://www.bn.gov.ar">Argentinean National Library</a>, <a
                    href="http://bracketmedia.com/">bracketmedia</a> and <a href="https://coffeedevs.com">Coffeedevs</a>
        </p>
        <p class="lead">
            I love everything <a href="https://laravel.com">Laravel</a>, performance, lifestyle business and
            cryptocurrencies
        </p>
        <p class="lead">
            The rest of the time I'm doing <a href="https://larassets.coffeedevs.com">side projects</a>, reading up on
            Bitcoin and writing up articles on stuff I learn.
        </p>
    </div>
@endsection