<?php
/**
 * Created by PhpStorm.
 * User: facundo.goni
 * Date: 30/8/2016
 * Time: 7:43 PM
 */

use Illuminate\Support\Facades\Request;
use Symfony\Component\Finder\Finder;

if (!function_exists('gallery_path')) {
    function gallery_path()
    {
        $directories = [];

        foreach (Finder::create()->in(public_path('web/galeria'))->directories()->depth(0) as $dir) {
            $directories[] = $dir->getPathname();
        }

        return $directories;
    }
}
if (!function_exists('active_route')) {
    function active_route($route)
    {
        if (str_is(Request::url(), route($route)))
            return "active";
        else return "";
    }
}

if (!function_exists('query_string')) {
    function query_string($key)
    {
        return str_contains(Request::fullUrl(), $key);
    }
}

if (!function_exists('get_short_class')) {
    function get_short_class($object)
    {
        return (new ReflectionClass($object))->getShortName();
    }
}

if (!function_exists('user')) {
    /**
     * @return \App\User|\Illuminate\Contracts\Auth\Authenticatable|null
     */
    function user()
    {
        return auth()->user();
    }
}

if (!function_exists('human_filesize')) {
    function human_filesize($bytes, $decimals = 2)
    {
        $size = array('B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB');
        $factor = floor((strlen($bytes) - 1) / 3);

        return sprintf("%.{$decimals}f", $bytes / pow(1024, $factor)) . @$size[$factor];
    }
}

if (!function_exists('truncate')) {
    function truncate($string, $limit, $break = ".", $pad = "...")
    {
        // return with no change if string is shorter than $limit
        if (strlen($string) <= $limit) return $string;

        // is $break present between $limit and the end of the string?
        if (false !== ($breakpoint = strpos($string, $break, $limit))) {
            if ($breakpoint < strlen($string) - 1) {
                $string = substr($string, 0, $breakpoint) . $pad;
            }
        }

        return $string;
    }
}

if (!function_exists('storage')) {
    function storage($disk = null)
    {
        return app('filesystem')->disk($disk);
    }
}

if (!function_exists('files')) {
    function files()
    {
        return app('files');
    }
}