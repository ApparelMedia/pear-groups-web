<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('groups', function () {
    $group = (object) ['name' => 'My soccer team', 'story' => 'We started a soccer team'];
    $state = [
        'group' => $group
    ];

    $initialState = json_encode($state);

   return view('groups', compact('group', 'initialState'));
});

Route::get('group-options', function () {
    $table = DB::table('groups_options');
    $firstLevel = $table->where('parent_id', 1)->where('status', 1)->orderBy('sort_order')->get();
    $output = $firstLevel->map(function ($type) use ($table) {
       $secondLevel = DB::table('groups_options')->where('parent_id', $type->id)->where('status', 1)->orderBy('sort_order')->get();
       $secondLevelList = $secondLevel->map(function ($type) use ($table) {
          return [
              'value' => $type->id,
              'label' => $type->name
          ];
       })->toArray();
       return [
           'value' => $type->id,
           'label' => $type->name,
           'children' => $secondLevelList
       ];
    })->toArray();
    return response()->json($output);
});
