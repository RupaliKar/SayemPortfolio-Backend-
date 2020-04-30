<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>ShahNewaz</title>

         <!-- Title -->
         <title>EventHour</title>
        <!-- Font Google -->
        <link href="https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed:300,400,500,700,800,900&display=swap" rel="stylesheet">
        <!-- Bootstrap Css -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" >
        <link href="assets/css/bootstrap.min.css" rel="stylesheet">
        <!-- Font Awesome Css -->
        <link href="{{ asset('/assets/css/all.min.css') }}" rel="stylesheet">
        <!-- Magnific Popup Css -->
        <link href="{{ asset('/assets/css/magnific-popup.css') }}" rel="stylesheet">
        <!-- favicon -->
        <link rel="shortcut icon" href="{{ asset('/assets/img/favicon.png') }}" />
        <!-- Owl Carousel Css -->
        <link href="{{ asset('/assets/css/owl.carousel.min.css') }}" rel="stylesheet">
         <!-- Bootstrap Css -->
         <link href="{{ asset('/assets/css/bootstrap.min.css') }}" rel="stylesheet">
         <!-- Animate Css -->
         <link href="{{ asset('/assets/css/animate.min.css') }}" rel="stylesheet">
        <!-- Main Css -->
        <link href="{{ asset('/assets/css/style.css') }}" rel="stylesheet">
        <!-- Responsive Css -->
        <link href="{{ asset('/assets/css/responsive.css') }}" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div >
            <div id="app">
                <master></master>
            </div>
        </div>
        <script src="/js/app.js"></script>
         <!-- Main JS -->
         <script src="{{ asset('/assets/js/jquery-1.12.4.min.js') }}"></script>
        <!-- Popper JS -->
        <script src="{{ asset('/assets/js/bootstrap.min.js') }}"></script>
        <!-- Bootstrap JS -->
        <script src="{{ asset('/assets/js/popper.min.js') }}"></script>
        <!-- Owl Carousel JS -->
        <script src="{{ asset('/assets/js/owl.carousel.min.js') }}"></script>
        <!-- Manific Popup JS -->
        <script src="{{ asset('/assets/js/jquery.scrollUp.min.js') }}"></script>
        <!-- One Page Nav JS -->
        <script src="{{ asset('/assets/js/waypoints.js') }}"></script>
        <!-- Isotope JS -->
        <script src="{{ asset('/assets/js/wow.min.js') }}"></script>
        <!-- Imageload JS -->
        <script src="{{ asset('/assets/js/masonry.pkgd.min.js') }}"></script>
        <!-- Counter JS -->
        <script src="{{ asset('/assets/js/active.js') }}"></script>
    </body>
</html>
