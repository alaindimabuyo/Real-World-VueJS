<template>
<div>
  <h1>Eventlist</h1>
     <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
</template>

<script>
import EventCard from "../components/EventCard"
import EventService from "../services/EventService"
export default {
    data() {
        return {
            events: []
        }
    },
    components: {
        EventCard
    },
   async created(){
       try {
           const res = await EventService.getEvents()
           this.events= res.data
       } catch (err) {
           console.log(err)
       }
    }
}
</script>

<style>

</style>