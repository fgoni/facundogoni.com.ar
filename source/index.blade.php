@extends('_layouts.master')

@section('content')
    <div class="lg:h-screen flex flex-col lg:flex-row items-center justify-center text-blue-lightest" style="transition: ease-in 200ms;">
        <div class="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img class="rounded-full h-48 w-48 lg:w-64 lg:h-64 m-2 lg:m-8 shadow-lg" src="/assets/img/8738638.jpg" alt="Facundo Goñi's picture">
        </div>
        <div class="w-full lg:w-1/2 sm:w-full mt-4 lg:mt-0 px-8 lg:px-0">
            <h1 class="text-5xl font-extrabold leading-none lg:w-48">Hi, I'm Facundo Goñi</h1>
            <h2 class="text-xl font-bold lg:w-1/2 my-4">I'm a web and mobile developer focused on rapid application development, fast prototyping and quality
                UI/UX.</h2>
            <p class="text-xl font-light lg:w-1/2">I love learning new tools and skills and I'm constantly looking to connect with people that feel the same
                way.</p>
            <div class="bg-blue-darker my-6  h-1 lg:w-1/2"></div>
            <p class="text-xl font-light lg:w-1/2">If you need help with a current project or a new one you have in mind, hit me up and we can talk about it.</p>
            <div class="mt-4 lg:w-1/2">
                <a href="mailto:facundo.goni@hotmail.com" class="no-underline text-blue-light hover:text-blue-lighter pr-2 lg:pr-4 text-xl">Email me</a>
                <a href="https://twitter.com/gonifacundo" class="no-underline text-blue-light hover:text-blue-lighter pr-2 lg:pr-4 text-xl">Twitter</a>
                <a href="https://www.linkedin.com/in/facundogoni/" class="no-underline text-blue-light hover:text-blue-lighter pr-2 lg:pr-4 text-xl">LinkedIn</a>
                <a href="https://github.com/fgoni" class="no-underline text-blue-light hover:text-blue-lighter pr-2 lg:pr-4 text-xl">GitHub</a>
            </div>
        </div>
    </div>
@endsection
