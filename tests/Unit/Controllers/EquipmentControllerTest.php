<?php

namespace Tests\Unit\Controllers;

use Carbon\Carbon;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class EquipmentControllerTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * Test resource listing
     *
     * @return void
     */
    public function testIndex()
    {
        $response = $this->json(
            'GET',
            route('equipment.index')
        )
            ->assertStatus(200)
            ->assertJson([]);
    }

    /**
     * Test storing a newly created resource in storage.
     *
     * @return void
     */
    public function testStore()
    {
        $response = $this->json(
            'POST',
            route('equipment.store'), 
            [
                'make' => 'test make',
                'model' => 'test model',
                'year' => '2005-01-01',
                'rate' => 2000,
                'picture' => 'test.png',
            ]
        )
            ->assertStatus(201);

        $this->assertDatabaseHas('equipment', ['make' => 'test make']);
    }

    public function testStoreValidatesInput()
    {
        $this->json(
            'POST',
            route('equipment.store'), 
            [
                'year' => 'foo',
                'rate' => '2000',
            ]
        )
            ->assertStatus(422);

        $this->assertDatabaseMissing('equipment', ['make' => 'test make']);
    }

    /**
     * Test displaying the specified resource.
     *
     * @return void
     */
    public function testShow()
    {
        $this->json(
            'GET', 
            route('equipment.show', ['id' => 1])
        )
            ->assertStatus(200)
            ->assertJson(['make' => 'Caterpillar']);
    }

    /**
     * Test updating the specified resource in storage.
     *
     * @return void
     */
    public function testUpdate()
    {
        $toUpdate = ['id' => 1];
        $newValue = ['make' => 'Butterfly'];

        $this->json(
            'PUT',
            route('equipment.update', $toUpdate),
            $newValue
        )
            ->assertStatus(200);

        $this->assertDatabaseHas('equipment', array_merge($toUpdate, $newValue));
    }

    /**
     * Test updating the specified resource in storage.
     *
     * @return void
     */
    public function testUpdateValidatesInput()
    {
        $toUpdate = ['id' => 1];
        $newValue = [
            'year' => 'foo',
            'rate' => '2000',
        ];

        $this->json(
            'PUT',
            route('equipment.update', $toUpdate),
            $newValue
        )
            ->assertStatus(422);

        $this->assertDatabaseMissing(
            'equipment', 
            array_merge($toUpdate, $newValue)
        );
    }

    /**
     * Test removing the specified resource from storage.
     *
     * @return void
     */
    public function testDestroy()
    {
        $toDelete = ['id' => 1];

        $this->json(
            'DELETE', 
            route('equipment.destroy', $toDelete)
        )
            ->assertStatus(200);
        
        $this->assertDatabaseMissing('equipment', $toDelete);
    }
}
