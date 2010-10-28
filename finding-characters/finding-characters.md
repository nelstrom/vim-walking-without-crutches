!SLIDE
# FINDING CHARACTERS

!SLIDE bullets
# FINDING CHARACTERS

* `f{char}` jumps to next occurence of `{char}`

!SLIDE center

![](../images/finding-characters-start.png)

!SLIDE center

![](../images/finding-P-character-1.png)

!SLIDE

# `fp`

!SLIDE center

![](../images/finding-P-character-2.png)

!SLIDE center

![scrabble tiles](../images/888.jpg)

!SLIDE center

![](../images/finding-T-character-1.png)

!SLIDE

# `ft`

!SLIDE center

![](../images/finding-T-character-2.png)

!SLIDE

# `;`

!SLIDE center

![](../images/finding-T-character-3.png)

!SLIDE center

![](../images/finding-T-character-4.png)

!SLIDE center

![](../images/finding-T-character-5.png)

!SLIDE

# `ft;;;`

!SLIDE bullets incremental

##THE VIM WAY

* do it (`f{char}`)
* repeat (`;`)
* reverse (`,`)

!SLIDE bullets

# Besides mindreading

* use with `d{motion}`
* use with `c{motion}`

!SLIDE bullets

# Inclusive or exclusive

* `f/F` land on the match
* `t/T` stop one short of the match

!SLIDE

### demo

!SLIDE bullets
# LIMITATIONS
## `f{char}` 

* only works
* on current line
* for single characters
