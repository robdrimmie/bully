<?php

namespace Tests\Unit\Controllers;

use Carbon\Carbon;
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
            ->assertJson([]);
    }

    /**
     * Test show the form for creating a new resource.
     *
     * @return void
     */
    public function testCreate()
    {
        $response = $this->get(route('equipment.create'))
            ->assertStatus(200);
        $this->assertContains('Make', $response->getContent());
    }

    /**
     * Test storing a newly created resource in storage.
     *
     * @return void
     */
    public function testStore()
    {
        $response = $this->post(route('equipment.store'), [
            'make' => 'test make',
            'model' => 'test model',
            'year' => Carbon::createFromDate(2005,1,1),
            'rate' => 2000,
            'picture' => 'test.png',
        ])->assertStatus(201);
        $this->assertDatabaseHas('equipment', ['make' => 'test make']);
    }

    /**
     * Test displaying the specified resource.
     *
     * @return void
     */
    public function testShow()
    {
        $response = $this->get(route('equipment.show', ['id' => 1]))
            ->assertStatus(200)
            ->assertJson(['make' => 'Caterpillar']);
    }

    /**
     * Test showing the form for editing the specified resource.
     *
     * @return void
     */
    public function testEdit()
    {
        $response = $this->get(route('equipment.edit', ['id' => 1]))
            ->assertStatus(200);
        $this->assertContains('Make', $response->getContent());
    }

    /**
     * Test updating the specified resource in storage.
     *
     * @return void
     */
    public function testUpdate()
    {
        $response = $this->put(
            route('equipment.update', ['id' => 1]),
            ['make' => 'Butterfly']
        )->assertStatus(200);

        $this->assertDatabaseHas('equipment', [
            'id' => 1,
            'make' => 'Butterfly'
        ]);

    }

    /**
     * Test removing the specified resource from storage.
     *
     * @return void
     */
    public function testDestroy()
    {
        $response = $this->delete(route('equipment.destroy', ['id' => 1]))
            ->assertStatus(200);
        
        $this->assertDatabaseMissing('equipment', ['id' => 1]);
    }
}
