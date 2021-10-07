import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { EDIT_PROFILE, BOOKS_EXCHANGED } from '../../utils/paths'
import UserContext from '../../UserContext'
import { Container, Row, Button } from 'react-bootstrap'
import { Header, ProfilePicture } from '../../components/styledComponents/styledPages/ProfileStyle'
import AuthService from '../../services/auth.service'
import styled from 'styled-components'

const authService = new AuthService()

const Description = styled.div`

width: 90%;
background: #FFFFFF;
color: #000000;
border-style:solid;
border-width: 1px;
border-color: rgba(0, 0, 0, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;
font-style: oblique;
font-weight: normal;
font-size: 13px;
line-height: 19px;
font-weight:500;
text-align:center;
padding:20px;
align-items: center;
`


const UserProfilePage = () => {

  const { loggedUser, storeUser } = useContext(UserContext)


  useEffect(() => {
    authService
      .refreshSession()
      .then(res => storeUser(res.data))
      .catch(err => console.error(err))
  }, [])


  return loggedUser ? (
    <Container className="mb-5" style={{ height: '100vh', borderRadius: '15px' }}>
      <Row style={{ minHeight: '60vh' }}>

        <Header className="col-md-12 header p-5 mb-5" />

        <div className="col-md-4 col-sm-12 mb-3" style={{ background: '#F4E7DE', height: '100%' }}>
          <div className="ml-5 d-flex align-items-center justify-content-between flex-column p-5" style={{ background: '#805D93', height: '80%', borderRadius: '15px' }} >

            <div className="info">
              <ProfilePicture image={loggedUser.profileImage || 'https://icon-library.com/images/generic-user-icon/generic-user-icon-19.jpg'} />
              <div className="info mt-5" style={{ color: 'white', fontSize: '2rem' }}>
                <p>{loggedUser.username}</p>
                <p><Description>"{loggedUser.description}" <br />
                  <div style={{ textAlign: 'right', fontWeight: '800' }}> {loggedUser.name}</div> </Description></p>
                <p>Friends: {loggedUser.friends.length}</p>
                <p>Read books: {loggedUser.books.filter(book => book.status === 'READ').length}</p>
                <p>Wants to Read: {loggedUser.books.filter(book => book.status === 'WANTSTOREAD').length}</p>
              </div>
            </div>

            <Button style={{ width: '100%', alignSelf: 'flex-end' }} className='button-link' as={Link} to={EDIT_PROFILE} variant="secondary" size="lg"> Edit Profile </Button>

          </div>
        </div>

        <div className="col-md-8 col-sm-12" style={{ background: '#F4E7DE' }}>
          <div className="ml-5 p-5 " style={{ background: '#805D93', height: '100%', borderRadius: '15px', color: 'white' }} >
            <h1>My Books</h1>
            <h3>I Want To Read</h3>
            <h3>Reading</h3>
            <h3>Read</h3>
            <Link to={BOOKS_EXCHANGED}><h3>Exchanged Books</h3></Link>
          </div>
        </div>
      </Row>
    </Container>
  )
    : (
      <h3>Loading...</h3>
    )

}


export default UserProfilePage