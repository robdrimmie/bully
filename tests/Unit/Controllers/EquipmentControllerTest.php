<?php

namespace Tests\Unit\Controllers;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class EquipmentControllerTest extends TestCase
{
    /**
     * Test resource listing
     *
     * @return void
     */
    public function testIndex()
    {
        $response = $this->get(route('equipment.index'));

        $response->assertStatus(200)
            ->assertJson([
                'id' => 1,
            ]);
    }

    /**
     * Test show the form for creating a new resource.
     *
     * @return void
     */
    public function testCreate()
    {
        $response = $this->get(route('equipment.create'));
        $response->assertStatus(200);
    }

    /**
     * Test storing a newly created resource in storage.
     *
     * @return void
     */
    public function testStore()
    {
        $response = $this->post(route('equipment.store'));
        $response->assertStatus(200);
    }

    /**
     * Test displaying the specified resource.
     *
     * @return void
     */
    public function testShow()
    {
        $response = $this->get(route('equipment.show', ['id' => 1]));
        $response->assertStatus(200);
    }

    /**
     * Test showing the form for editing the specified resource.
     *
     * @return void
     */
    public function testEdit()
    {
        $response = $this->get(route('equipment.edit', ['id' => 1]));
        $response->assertStatus(200);
    }

    /**
     * Test updating the specified resource in storage.
     *
     * @return void
     */
    public function testUpdate()
    {
        $response = $this->put(route('equipment.update', ['id' => 1]));
        $response->assertStatus(200);
    }

    /**
     * Test removing the specified resource from storage.
     *
     * @return void
     */
    public function testDestroy()
    {
        $response = $this->delete(route('equipment.destroy', ['id' => 1]));
        $response->assertStatus(200);
    }
}
