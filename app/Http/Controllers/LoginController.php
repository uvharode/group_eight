<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    //display users-----------------------------------
    function display()
    {
        return user::all();
    }

    //register users-----------------------------------
    function register(Request $req)
    {
        $user = new User;
        $user->name = $req->name;
        $user->password = Hash::make($req->password);
        $user->email = $req->email;
        $result = $user->save();

        if ($result) {
            return ["Result" => "Data has been saved"];
        } else {
            return ["Result" => "Add Operation failed"];
        }
    }

    //authenticating and login users--------------------
    function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        // dd($user->email);
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response([
                'message' => ['These credentials do not match our records.']
            ], 404);
        }
        $token = $user->createToken('my-app-token')->plainTextToken;
        $response = [
            'user' => $user,
            'token' => $token
        ];
        return response($response, 201);
    }
}
