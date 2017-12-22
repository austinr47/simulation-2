import React from 'react';
import WizardOne from './components/WizardOne';
import WizardTwo from './components/WizardTwo';


import NextBtn from './components/NextBtn';
import { Route, HashRouter } from 'react-router-dom';

export default (

            <HashRouter>
                <div>
                <Route exact path= '/' component={NextBtn} />
                <Route path='/wOne' component={WizardOne} />
                <Route path="/wTwo" component={WizardTwo} />
                </div>
            </HashRouter>
        )

 

 