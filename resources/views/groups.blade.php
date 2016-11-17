<!doctype html>
<html lang="en">
<head>
    <title>{{ $groupName or 'New Group' }} - Pear</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{asset(react_path('app.css'))}}">
    <script src='{{asset(react_path('vendor.js'))}}'></script>
    <script>
      window.___INITIAL_STATE__={!! $initialState or '{}'!!}
    </script>
</head>
<body>
@if( isset($group) )
    <div style='position:absolute;left:-9999em;top:auto;width:1px;height:1px;overflow:hidden;'>
        <h1>{{$group->name}}</h1>
        <p>{{$group->story}}</p>
    </div>
@endif
<div id="root" style="height: 100%"></div>
<script src='{{asset(react_path('app.js'))}}'></script>
</body>
</html>
