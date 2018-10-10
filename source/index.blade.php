@extends('_layouts.master')

@section('content')
    <div class="h-screen flex items-center justify-center bg-blue-darkest text-blue-lightest" style="transition: ease-in 200ms;">
        <div class="w-1/2 flex justify-end">
            <img class="rounded-full h-64 w-64 m-8 shadow-lg" src="/assets/img/8738638.jpg" alt="Facundo Goñi's picture">
        </div>
        <div class="w-1/2">
            <h1 class="text-5xl font-extrabold leading-none w-48">Hi, I'm Facundo Goñi</h1>
            <h2 class="text-xl font-bold w-1/2 my-4">I'm a web and mobile developer focused on rapid application development, fast prototyping and quality
                UI/UX.</h2>
            <p class="text-xl font-light w-1/2">I love learning new tools and skills and I'm constantly looking to connect with people that feel the same
                way.</p>
            <div class="bg-blue-darker my-6  h-1 w-1/2"></div>
            <p class="text-xl font-light w-1/2">If you need help with a current project or a new one you have in mind, hit me up and we can talk about it.</p>
            <div class="mt-4 w-1/2">
                <a href="mailto:facundo.goni@hotmail.com" class="no-underline text-blue-light hover:text-blue-lighter pr-4 text-xl">Email me</a>
                <a href="https://twitter.com/gonifacundo" class="no-underline text-blue-light hover:text-blue-lighter pr-4 text-xl">Twitter</a>
                <a href="https://www.linkedin.com/in/facundogoni/" class="no-underline text-blue-light hover:text-blue-lighter pr-4 text-xl">LinkedIn</a>
                <a href="https://github.com/fgoni" class="no-underline text-blue-light hover:text-blue-lighter pr-4 text-xl">GitHub</a>
            </div>
        </div>
    </div>
@endsection
