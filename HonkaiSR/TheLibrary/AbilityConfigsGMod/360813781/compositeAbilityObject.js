const compositeAbilityObject = {
  "fullCharacterName": 360813781,
  "trimCharacterName": 360813781,
  "abilityList": [
    "360813781_Modifiers"
  ],
  "abilityObject": {
    "360813781_Modifiers": {
      "fileName": "360813781_Modifiers",
      "abilityType": "Char. Modifiers",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-16560037\">BattleEventAbility_Challenge_Month_35_FixSub</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Turn Start [Anyone]"
            },
            {
              "eventTrigger": "Turn [Pre-action Phase] [Anyone]"
            },
            {
              "eventTrigger": "Action Phase Start [Anyone][?]"
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]"
            },
            {
              "eventTrigger": "Dealt Damage while Crowd/Mind Controlled [Anyone]"
            },
            {
              "eventTrigger": "Dealt Damage (END) while Crowd/Mind Controlled [Anyone]"
            },
            {
              "eventTrigger": "Action End [Anyone]"
            },
            {
              "eventTrigger": "Turn End [Anyone]"
            },
            {
              "eventTrigger": "Turn [Action-End Phase] [Anyone]"
            },
            {
              "eventTrigger": "Deal Damage End [Anyone]: Hit"
            },
            {
              "eventTrigger": "Deal Damage End [Anyone]: Any"
            },
            {
              "eventTrigger": "Take Damage End [Anyone]: Hit"
            },
            {
              "eventTrigger": "Take Damage Start [Anyone]: Any"
            },
            {
              "eventTrigger": "Being Toughness Bar Reset [Anyone]"
            },
            {
              "eventTrigger": "Entity Death [Anyone]"
            },
            {
              "eventTrigger": "Entity Left Battle [Anyone]"
            },
            {
              "eventTrigger": "Entity Created [Anyone]"
            },
            {
              "eventTrigger": "Entity Put Into Limbo [Anyone]"
            },
            {
              "eventTrigger": "HP Change [Anyone]"
            },
            {
              "eventTrigger": "Skill Point Changes"
            },
            {
              "eventTrigger": "Attack Start [Anyone]"
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]"
            },
            {
              "eventTrigger": "Attack Action Completed [Anyone]"
            },
            {
              "eventTrigger": "Ability Target Redirected [Anyone]"
            },
            {
              "eventTrigger": "Action Start [Anyone]"
            },
            {
              "eventTrigger": "Action Completed [Anyone]"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End"
            },
            {
              "eventTrigger": "Enter Battle"
            },
            {
              "eventTrigger": "Leave Battle"
            },
            {
              "eventTrigger": "Caused Weakness Break [Anyone]: Start"
            },
            {
              "eventTrigger": "Weakness Break [Anyone]"
            },
            {
              "eventTrigger": "End Broken State [Anyone]"
            },
            {
              "eventTrigger": "Entering Exo-Toughness Bar [Anyone]"
            },
            {
              "eventTrigger": "Being Exo-Weakness Broken: End [Anyone]"
            },
            {
              "eventTrigger": "Ultimate [Anyone]: Start[?]"
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]"
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: Start"
            },
            {
              "eventTrigger": "Ability Executed [Anyone]"
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]"
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]"
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Anyone]"
            },
            {
              "eventTrigger": "Created Shield [Anyone]"
            },
            {
              "eventTrigger": "Shield Value Change [Anyone]"
            },
            {
              "eventTrigger": "New Enemy Wave: Start"
            },
            {
              "eventTrigger": "New Enemy Wave"
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Checks-Phase"
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start"
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End"
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Aborted"
            },
            {
              "eventTrigger": "Battle Event/Summon Created [Anyone]"
            },
            {
              "eventTrigger": "Battle Event/Summon Died [Anyone]"
            },
            {
              "eventTrigger": "Modifier Cleansed [Anyone]"
            },
            {
              "eventTrigger": "Modifier was Resisted [Anyone]"
            },
            {
              "eventTrigger": "Member Added to Team [Owner]"
            },
            {
              "eventTrigger": "Member Removed from Team [Owner]"
            },
            {
              "eventTrigger": "Get Revived [Anyone]"
            },
            {
              "eventTrigger": "Final Death [Anyone]"
            },
            {
              "eventTrigger": "Action Countdown [Anyone][?]"
            },
            {
              "eventTrigger": "Action Countdown Active [Anyone][?]"
            },
            {
              "eventTrigger": "AV Forcibly Changed [Global]"
            },
            {
              "eventTrigger": "Some event xp level up"
            },
            {
              "eventTrigger": "Some event kill scoring"
            },
            {
              "eventTrigger": "Scepter Trigger [Anyone]: Start"
            },
            {
              "eventTrigger": "Scepter Trigger [Anyone]: Anyone"
            },
            {
              "eventTrigger": "VS Bar Special Phase"
            },
            {
              "eventTrigger": "Check Callback Flag Parameter"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1476592663\">BattleEventAbility_Challenge_Month_35_Fix</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Every Battle Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-16560037\">BattleEventAbility_Challenge_Month_35_FixSub</a>"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-16560037\">BattleEventAbility_Challenge_Month_35_FixSub</a>"
                }
              ]
            },
            {
              "eventTrigger": "Battle Event/Summon Created [Anyone]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-16560037\">BattleEventAbility_Challenge_Month_35_FixSub</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-115963541\">MGM_Endurance_00</a>",
          "modifierFlags": [
            "EnduranceEnemyOnly"
          ]
        }
      ],
      "references": []
    }
  }
}