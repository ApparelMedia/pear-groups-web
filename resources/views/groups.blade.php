<!doctype html>
<html lang="en">
<head>
    <title>{{ $groupName or 'New Group' }} - Pear</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{asset(react_path('app.css'))}}">
    <script src='{{asset(react_path('vendor.js'))}}'></script>
    <script>
      window.___INITIAL_STATE__ = {};
    </script>
</head>
<body>
<div id="root" style="height: 100%"></div>
<script src='{{asset(react_path('app.js'))}}'></script>
</body>
</html>
