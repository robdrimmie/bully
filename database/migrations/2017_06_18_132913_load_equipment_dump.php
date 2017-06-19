<?php

use App\Equipment;

use Carbon\Carbon;
use League\Csv\Reader;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class LoadEquipmentDump extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $csv = Reader::createFromPath(storage_path('data/equipment.csv'));
        $csv->setOffset(1); // no header

        $csv->each(function ($row) {
            Equipment::create([
                'make' => $row[0],
                'model' => $row[1],
                'year' =>  Carbon::createFromDate($row[2],1,1),
                'picture' => '',
                'rate' => $row[3],
            ]);

            return true;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Loading data without unique identifiers is not reversible.
    }
}
