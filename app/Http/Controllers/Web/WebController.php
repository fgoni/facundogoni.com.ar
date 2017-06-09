<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Post;

class WebController extends Controller
{
    public function home()
    {
        return view('web.home');
    }

    public function contact()
    {
        return view('web.contact');
    }

    public function newsletter()
    {
        return view('web.newsletter');
    }

    public function blog()
    {
        $posts = Post::latest()->simplePaginate(10);

        return view('web.blog')->withPosts($posts);
    }
}
