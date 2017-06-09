@extends('layouts.web')
@section('content')
    <!-- Begin MailChimp Signup Form -->
    <div id="mc_embed_signup">
        <form action="//coffeedevs.us12.list-manage.com/subscribe/post?u=71b6d15af04662f36c703deb6&amp;id=f80268e204"
              method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
              target="_blank">
            <div id="mc_embed_signup_scroll">
                <h2>Want to become an online entrepeneur?</h2>
                <p class="lead">I'll send regular tips for you to embrace the power of modern web tools and get you up
                    on building a killer web app which you can monetize and be on your way to financial freedom in no time</p>
                <div class="mc-field-group form-group">
                    <input type="email" value="" name="EMAIL" class="required email form-control" id="mce-EMAIL"
                           placeholder="you.are@amazing.com" required>
                </div>
                <div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response" style="display:none"></div>
                    <div class="response" id="mce-success-response" style="display:none"></div>
                </div>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
                                                                                          name="b_71b6d15af04662f36c703deb6_f80268e204"
                                                                                          tabindex="-1" value=""></div>
                <div class="clear">
                    <input type="submit" value="I want to BE AWESOME" name="subscribe" id="mc-embedded-subscribe"
                           class="button btn btn-success btn-lg">
                </div>
            </div>
        </form>
    </div>

    <!--End mc_embed_signup-->
@endsection