<?php

namespace App\Http\Controllers;


use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::all();

        return Inertia::render('Admin/Contact/List', [
            'contacts' => $contacts
        ]);
    }
    public function create()
    {
        return Inertia::render('Contact');
    }
    public function store(Request $request)
    {
        $request->validate([
            'user_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phonenumber' => 'required|string|max:20',
            'message' => 'required|string',
        ]);

        $contact = new Contact();
        $contact->user_name = $request->user_name;
        $contact->email = $request->email;
        $contact->phonenumber = $request->phonenumber;
        $contact->message = $request->message;
        $contact->save();

        return redirect()->route('HomePage')->with('success', 'Thông tin liên hệ đã được gửi đi thành công!');
    }
    public function destroy($id): RedirectResponse
    {
        Contact::find($id)->delete();
        return Redirect::route('contact.list');
    }
}
