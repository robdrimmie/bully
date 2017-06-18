<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class Equipment extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'make' => 'string|nullable|max:255',
            'model' => 'string|nullable|max:255',
            'year' => 'date|nullable',
            'picture' => 'string|nullable|max:255',
            'rate' => 'numeric|nullable',
        ];
    }
}
