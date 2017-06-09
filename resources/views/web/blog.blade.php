@extends('layouts.web')
@section('content')
    <h2>Latest posts</h2>
    @each('partials.post', $posts, 'post', 'partials.no-post')
@endsection