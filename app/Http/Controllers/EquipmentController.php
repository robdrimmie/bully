<?php

namespace App\Http\Controllers;

use App\Equipment;
use App\Http\Requests\Equipment as EquipmentRequest;

use Illuminate\Http\Request;

class EquipmentController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Equipment::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\Equipment  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EquipmentRequest $request)
    {
        Equipment::create($request->all());

        return response('', 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Equipment  $equipment
     * @return \Illuminate\Http\Response
     */
    public function show(Equipment $equipment)
    {
        return $equipment;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  App\Http\Requests\Equipment  $request
     * @param  \App\Equipment  $equipment
     * @return \Illuminate\Http\Response
     */
    public function update(EquipmentRequest $request, Equipment $equipment)
    {
        $equipment->make = $request->has('make') ? $request->make : $equipment->make;
        $equipment->model = $request->has('model') ? $request->model : $equipment->model;
        $equipment->year = $request->has('year') ? $request->year : $equipment->year;
        $equipment->picture = $request->has('picture') ? $request->picture : $equipment->picture;
        $equipment->rate = $request->has('rate') ? $request->rate : $equipment->rate;

        $equipment->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Equipment  $equipment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Equipment $equipment)
    {
        $equipment->delete();
    }
}
