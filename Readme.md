# IoT Devices - Battery Donsumption Tests

Documentation and further information to the battery race with IoT devices, live realtime results on http://theiler.space:81 .

## Battery

All devices are all running on the same Battery (3.7V, 650mAh), you'll typically get from some cheap drones. 

## Series explanation per device

* **DSxxx**: Deep sleep for xxx seconds. The device basically shuts down completely and starts with init() again.

  * [Particle](https://www.particle.io/) <code class="language-html" data-lang="c"><span class="nt">
        <a href="https://docs.particle.io/reference/firmware/electron/#sleep-sleep-">System.sleep(SLEEP_MODE_DEEP, long seconds);</a>
      </span></code>

* **Sxxx**: Sleep for xxx seconds, which depends on the device/hardware.

  * [Moteino](http://lowpowerlab.com/moteino/) <code class="language-html" data-lang="c"><span class="nt">
        <a href="https://github.com/matthijskooijman/arduino-lmic/blob/master/examples/ttn/ttn.ino">os_setTimedCallback(&sendjob, os_getTime() + sec2osticks(TX_INTERVAL), do_send);</a>
      </span></code>
* **USB-5V**: Not running on battery, its just check if the LORA Gateway is still up and running. If its not running, the other LoRa measurement might be temporarily finished.

## Scripts

* **REST**: Restful call every 180s, to tell this site, its still alive

* **MQTT**: MQTT call every 180s, to tell this site, its still alive. Note: The electron firmare needs to be at 0.5.0-rc2.

* **AFFE2702, AFFE2709**: MQTT call every 180s, to tell this site, its still alive

## Connectivity

For the 2G/3G Particle tests, I noticed that buliding up the connection apparently generates a huge impact on the battery consumption. My first tests were done in the basement, where the connectivity isn't not good. When I repeated the tests at a good connectivity place, the results were much better.

## Traffic Cost

Particle charges $2.99 for the first mb, then $0.99 for the following mb's. This results in

* **3G-REST**: 96 messages, 0.57MB, $2.99

* **2G-REST**: 322 messages, 1.85MB, $3.98

So REST will be crazy expensive in real projects, and really not the way to go. 


## Other links

* [Moteino TTN Walkthrough]("https://github.com/lukastheiler/ttn_monteino")

## Images
And here's an image of the devices - Particle WiFi/2g/3g and the Moteino LoRa- in action:

<a href="battery_showdown.png" target="blank">
  <img href="https://github.com/lukastheiler/IoT-devices-battery-test/raw/master/public/battery_showdown.png" src="https://github.com/lukastheiler/IoT-devices-battery-test/raw/master/public/battery_showdown.png" width="25%">
</a>

More tests will follow! If you want to know more, disuss the results, drop me a line or open an issue in this repository.
