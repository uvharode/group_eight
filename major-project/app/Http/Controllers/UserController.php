<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    function display()
    {
        $user = User::all();
        return response()->json($user);
    }

    function login(Request $request)
    {
        $credentials = $request->only(['email', 'password']);
        $user = User::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['error' => 'invalid  Credential'], 400);
        }
        //return response()->json($user->createToken('auth')->plainTextToken);
        //return response()->json(['message' => 'Login Successful']);
        // return response()->json(($user->id));
        return response()->json(($user->id));
    }

    function register(Request $request)
    {
        $credentials = $request->all();
        $credentials['password'] = Hash::make($credentials['password']);
        $user = User::create($credentials);
        //auth()->login($user);
        return response()->json($user);
    }

    // function logout($id){
    //     User::find($id)->delete();
    // }
}
