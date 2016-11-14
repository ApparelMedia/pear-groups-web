<?php namespace App;

use App\Api\ApiModel;

class Group extends ApiModel
{
    public function __construct()
    {

    }

    public function find($id) {
        $data = [
            'id' => $id,
            'name' => '',
            'members' => [
                ['first_name' => '', 'last_name' => '', 'photo' => ''],
                ['first_name' => '', 'last_name' => '', 'photo' => ''],
                ['first_name' => '', 'last_name' => '', 'photo' => ''],
                ['first_name' => '', 'last_name' => '', 'photo' => ''],
                ['first_name' => '', 'last_name' => '', 'photo' => ''],
            ],
            'supporters' => [
                ['first_name' => '', 'last_name' => '', 'photo' => ''],
                ['first_name' => '', 'last_name' => '', 'photo' => ''],
                ['first_name' => '', 'last_name' => '', 'photo' => ''],
                ['first_name' => '', 'last_name' => '', 'photo' => ''],
                ['first_name' => '', 'last_name' => '', 'photo' => ''],
            ],
            'type' => '',
            'sponsors' => [
                ['name' => 'ADT', 'logo' => ''],
            ],
            'checkins' => [
                ['name' => '', 'latitude' => '', 'longitude' => '']
            ],
            'total_amount' => 300,
        ];

        return json_encode($data);
    }


}