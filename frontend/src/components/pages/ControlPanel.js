import React from 'react'
import EmailList from '../auth/EmailList'
import ProjectDelete from '../auth/ProjectDelete'
import ProjectUpload from '../auth/ProjectUpload'
import Divider from '../layout/Divider'

export default function ControlPanel() {
    return (
        <div className="control-panel">
            <h1 className="control-panel-heading">Control Panel</h1>
            <ul>
                <li>
                    <a className="control-panel-button" href="/ControlPanel/Upload">Upload a Project</a>
                </li>
                <li>
                    <a className="control-panel-button" href="/ControlPanel/Delete">Delete a Project</a>
                </li>
                <li>
                    <a className="control-panel-button" href="/ControlPanel/Email">View Email List</a>
                </li>
                <li>
                    <a className="control-panel-button" href="/ControlPanel/Order">View Order List</a>
                </li>
            </ul>
            <Divider />
        </div>
    )
}
