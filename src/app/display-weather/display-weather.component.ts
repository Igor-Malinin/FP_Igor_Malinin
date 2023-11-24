import { Component } from '@angular/core';
import {LocationDto} from "../../dto/locationDto";
import {WeatherDto} from "../../dto/weatherDto";
import {ApiService} from "../api.service";
import {ImageDto} from "../../dto/imageDto";
import {finalize} from "rxjs";

@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.scss']
})
export class DisplayWeatherComponent {
  city: string = ""
   error: string = ""
  private locationDto: LocationDto | null = null
  private weatherDto: WeatherDto | null = null
  private image: ImageDto = {url: ""}

  private loadLocation: boolean = false
  private loadWeather: boolean = false
  private loadImage: boolean = false

  constructor(private api: ApiService) {
  }

  public searchLocation() {
    this.loadLocation = true
    setTimeout(async () => {
      if(!this.city) {
        console.error("Город не указан")
        return
      }

      await this.api.getLocation(this.city)
        .pipe(finalize(() => this.loadLocation = false))
        .subscribe({
          next: (response) => {
            console.log(response)
            this.locationDto = response[0]
            console.log(this.locationDto)
            if(this.locationDto === undefined)
              this.error = "Не удалось найти город"
            else {
              this.error = ""
              this.getWeather()
            }
          },
          error: (error) => {
            console.error(error)
            this.error = error
          },
        })
    }, 1500)
  }

  private getWeather() {
    this.loadWeather = true
    setTimeout(async () => {
      if(!this.locationDto) {
        console.error("Не удалось найти город")
        return
      }

      await this.api.getWeatherInCity(this.locationDto.lat, this.locationDto.lon)
        .pipe(finalize(() => this.loadWeather = false))
        .subscribe({
          next: (response) => {
            console.log('getCityWeather', response)
            this.weatherDto = {
              description: response.weather[0].description,
              temp: response.main.temp,
              feelsLike: response.main.feels_like,
              windSpeed: response.wind.speed,
              pressure: response.main.pressure,
              humidity: response.main.humidity
            };
            console.log(this.weatherDto)
            if(this.weatherDto === undefined)
              this.error = "Погода неизвестна"
            else {
              this.error = ""
              this.searchImage()
            }
          },
          error: (error) => {
            console.error(error)
            this.error = error
          },
        })
    }, 1500)
  }

  public searchImage() {
    this.loadImage = true
    setTimeout(async () => {
      if (!this.weatherDto) {
        console.error("Погода неизвестна")
        return
      }
      let index = Math.random() * 5
      await this.api.getImage(this.weatherDto.description)
        .pipe(finalize(() => this.loadImage = false))
        .subscribe({
          next: (response) => {
            this.image.url = response.results[index.toFixed(0)].urls.full
            console.log(this.image)
            if(this.image === undefined)
              this.error = "Нет картинки"
            else {
              this.error = ""
            }
          },
          error: (error) => {
            console.error(error)
            this.error = error
          }
        })
    }, 1500)
  }

  getLoadLocation() {
    return this.loadLocation
  }

  getLoadWeather() {
    return this.loadWeather
  }

  getLoadImage() {
    return this.loadImage
  }

  getLocationInfo() {
    if(this.locationDto?.local_names?.ru === "")
      return this.locationDto?.name
    else
      return this.locationDto?.local_names?.ru
  }

  getWeatherInfo() {
    return this.weatherDto
  }

  getImageUrl() {
    return this.image.url
  }

  getError() {
    return this.error
  }
}
