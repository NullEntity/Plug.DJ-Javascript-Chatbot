class pingCommand extends Command
	init: ->
		@command=['/ping']
		@parseType='exact'
		@rankPrivelege='user'

	functionality: ->
		msg = 'Pong!'
		API.sendChat msg
		
cmds.push pingCommand