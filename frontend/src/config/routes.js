import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Posts from '../components/template/Content'
import CreatePost from '../components/CreatePost'
import Admin from '../components/Admin'
const Routes = () =>(
	<BrowserRouter>
		<Switch>
			<Route exact path="/admin" component = {() => <Admin/>}/>
			<Route exact path="/create" component= {() => <CreatePost/>}/>
			<Route path="/" component={() => <Posts/>}/>
		</Switch>
	</BrowserRouter>
)

export default Routes