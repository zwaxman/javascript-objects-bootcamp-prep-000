var playlist = {
  artist: 'song'
}

function updatePlaylist(playlist,artistName,songTitle){
  return playlist[artistName]=songTitle;
}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]
  return playlist
}

//   describe('updatePlaylist(playlist, artistName, songTitle)', () => {
//     before(() => {
//       playlist['Slowdive'] = 'Alison'
//       playlist['My Bloody Valentine'] = 'Sometimes'
//     })

//     it('adds the `artistName: songTitle` key-value pair to `playlist`', () => {
//       updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")

//       expect(playlist).
//         to.contain.all.keys({'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"})
//     })
//   })

//   describe('removeFromPlaylist(playlist, artistName)', () => {
//     it('removes `artistName` from `playlist`', () => {
//       removeFromPlaylist(playlist, 'Slowdive')

//       expect(playlist).
//         to.contain.all.keys({'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"})

//       expect(playlist).
//         not.to.have.all.keys({'Slowdive': 'Alison'})
//     })
//   })
// })
