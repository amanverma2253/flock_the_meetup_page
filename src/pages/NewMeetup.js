import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetupPage() {
  const navigate = useNavigate();
  function addNewMeetuphandler(meetupData) {
    fetch(
      "https://react-meetup-page-4de42-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Contenet-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetups </h1>
      <NewMeetupForm onAddMeetup={addNewMeetuphandler} />
    </section>
  );
}

export default NewMeetupPage;
