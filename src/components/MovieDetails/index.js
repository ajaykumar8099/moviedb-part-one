import {Component} from 'react'

class MovieDetails extends Component {
  state = {castDetailsList: []}

  getMovieDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const key = 'bdc9e7badf1357d7412ea98432343b0b'
    console.log(id, 'for movie')
    const url = `/api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
    }
  }

  getCastDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const key = 'bdc9e7badf1357d7412ea98432343b0b'
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`
    const options = {
      method: 'GET',
    }
    const respone = await fetch(url, options)
    if (respone.ok) {
      const data = await respone.json()
      const {cast} = data
      const camelCaseData = cast.map(each => ({
        adult: each.adult,
        castId: each.cast_id,
        character: each.character,
        creditId: each.credit_id,
        gender: each.gender,
        id: each.id,
        knownForDepartment: each.known_for_department,
        name: each.name,
        order: each.name,
        originalName: each.original_name,
        popularity: each.popularity,
        profilePath: each.profile_path,
      }))
      this.setState({castDetailsList: camelCaseData})
    }
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.getMovieDetails}>
          Movie Details
        </button>
        <button type="button" onClick={this.getCastDetails}>
          Cast Details
        </button>
      </div>
    )
  }
}
export default MovieDetails
