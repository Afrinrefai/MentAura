import Footer from "./Footer";
import MentorList from "./MentorList";
import ProfileHeader from "./ProfileHeader";

export default function LearnerDashboard(){
    return(
        <div>
            <ProfileHeader />
            <MentorList />
            <Footer />
        </div>
    )
}