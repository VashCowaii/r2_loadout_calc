const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 60011,
  "trimCharacterName": 60011,
  "abilityList": [
    "60011_MissionBattleEvent60008_Listener"
  ],
  "abilityObject": {
    "60011_MissionBattleEvent60008_Listener": {
      "fileName": "60011_MissionBattleEvent60008_Listener",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1136491047\">Modifier_MissionBattleEvent60008_Insert</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1136491047\">Modifier_MissionBattleEvent60008_Insert</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Battle Event List}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Battle Event ID",
                    "ID": 60008,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "MissionBattleEvent60008_Ability02_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    }
  },
  "enemyData": {
    "Skill08": {
      "skillID": 6000801,
      "trigger": "Skill08",
      "name": "",
      "type": "Single Target",
      "slot": "Basic ATK",
      "desc": "Deals Fire DMG to all targets",
      "energyCost": null,
      "energyRegen": 10,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          3
        ]
      },
      "element": "Fire",
      "attackType": "Normal",
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    }
  },
  "isBattleEvent": true
}