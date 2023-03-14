import Contact_Info from './Contact-Info';
import Profile from './Profile';
import References from './References';
import Skills from './Skills'

const SideBar = () => {
    return (
        <aside className="SideBar">
            {<Profile />}
            {<Contact_Info />}
            {<Skills />}
            {<References />}

        </aside >
    )
}

export default SideBar