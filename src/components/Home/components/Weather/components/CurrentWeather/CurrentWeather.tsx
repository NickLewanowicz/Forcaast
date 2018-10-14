import * as React from 'react';
import { CurrentWeatherType } from '../../Weather'


export class CurrentWeather extends React.Component<CurrentWeatherType, {}> {
  public render() {
    const {city, description} = this.props;
    return (
      <div>
        <div><em>Currently <span className='description'>{description}</span> in <span className='city'>{city}!</span> </em>
      </div>
      </div>
    )
  }
}

export default CurrentWeather
