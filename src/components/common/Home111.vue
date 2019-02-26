<template>
    <div>
        <div class="image-test ml-5 mt-5 mb-5"></div>
        <div class="container-fluid mt-lg-5 row">
            <div class="col-6 test">
                <v-client-table :data="days" :columns="column" :options="options">
                    <a slot="edit" slot-scope="props" class="fa fa-edit">+</a>
                </v-client-table>
            </div>
            <div class="col-6">
                <div>
                    <b-card no-body class="text-center">
                        <b-tabs card nav-class="justify-content-center text-center">
                            <b-tab no-body title="Picture 1" >
                                <b-card-img bottom src="https://picsum.photos/600/200/?image=21" />
                                <b-card-footer>Picture 1 footer</b-card-footer>
                            </b-tab>

                            <b-tab no-body title="Picture 2">
                                <b-card-img bottom src="https://picsum.photos/600/200/?image=25" />
                                <b-card-footer>Picture 2 footer</b-card-footer>
                            </b-tab>

                            <b-tab no-body title="Picture 3">
                                <b-card-img bottom src="https://picsum.photos/600/200/?image=26" />
                                <b-card-footer>Picture 3 footer</b-card-footer>
                            </b-tab>

                            <b-tab title="Text">
                                <h5>This tab does not have the <code>no-body</code> prop set</h5>
                                Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
                                consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
                                mollit voluptate est in duis laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit
                                elit veniam Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure.
                            </b-tab>
                        </b-tabs>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data: function () {
    return {
      options: {
        headings: {
          id: 'STT'
        }
        // childRow: 'row-component'
      },
      column: ['id', 'day', 'edit'],
      days: [
        { id: 1, day: '1' },
        { id: 2, day: '2' },
        { id: 3, day: '3' },
        { id: 4, day: '4' },
        { id: 5, day: '5' },
        { id: 6, day: '6' },
        { id: 7, day: '7' },
        { id: 8, day: '8' },
        { id: 9, day: '9' },
        { id: 10, day: '10' },
        { id: 11, day: '11' },
        { id: 12, day: '12' },
        { id: 13, day: '13' },
        { id: 14, day: '14' },
        { id: 15, day: '15' },
        { id: 16, day: '16' },
        { id: 17, day: '17' },
        { id: 18, day: '18' },
        { id: 19, day: '19' },
        { id: 20, day: '20' },
        { id: 21, day: '21' },
        { id: 22, day: '22' },
        { id: 23, day: '23' },
        { id: 24, day: '24' },
        { id: 25, day: '25' },
        { id: 26, day: '26' },
        { id: 27, day: '27' },
        { id: 28, day: '28' },
        { id: 29, day: '29' },
        { id: 30, day: '30' },
        { id: 31, day: '31' }
      ]
    }
  },
  created: function () {

  },
  mounted () {
    // $('.card-header-tabs').css('justify-content', 'center !important')
    // let el = document.getElementsByClassName('card-header')
    // $('.card-header-tabs').addClass('tabs-custom')
    // el.add('tabs-custom')
    console.log('12323')
  }
}
</script>
