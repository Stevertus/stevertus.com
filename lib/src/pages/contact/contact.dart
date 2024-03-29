import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:fluix_web/fluix/button/button.dart';
import 'package:fluix_web/fluix/card/card.dart';
import 'package:fluix_web/fluix/input/input.dart';
import 'package:fluix_web/fluix/multi_input/input.dart';
import 'package:http/http.dart' as http;

final URL = 'https://end5dyr2pyfxi28.m.pipedream.net';

@Component(
  selector: 'contact',
  styleUrls: ['contact.css'],
  templateUrl: 'contact.html',
  directives: [
    FluidCard,
    FluidInput,
    FluidMultiInput,
    FluidButton,
    coreDirectives,
    formDirectives
  ],
)
class ContactPage {
  String name = '';
  String email = '';
  String message = '';

  String error = '';

  bool success = false;

  void submit() {
    error = '';
    if (name.isEmpty) {
      error = 'Please enter your name!';
      return;
    }
    var regexp = RegExp(
        r'^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$');
    if (email.isEmpty || !regexp.hasMatch(email)) {
      error = 'Please enter a valid email!';
      return;
    }
    if (message.isEmpty) {
      error = 'Please enter your message!';
      return;
    }
    http.post(Uri.parse(URL),
        body: {'name': name, 'email': email, 'message': message}).then((res) {
      if (res.statusCode == 200) {
        success = true;
        name = '';
        email = '';
        message = '';
      }
    }).catchError((err) {
      error = 'An error occured, please try again!';
    });
  }
}
