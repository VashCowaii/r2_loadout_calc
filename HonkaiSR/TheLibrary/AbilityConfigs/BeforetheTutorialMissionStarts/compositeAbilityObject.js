const compositeAbilityObject = {
  "fullCharacterName": "Before the Tutorial Mission Starts",
  "trimCharacterName": "BeforetheTutorialMissionStarts",
  "abilityList": [
    "BeforetheTutorialMissionStarts_Ability22000"
  ],
  "fixedStats": {
    "1": {
      "EffectHitRate": 0.2
    },
    "2": {
      "EffectHitRate": 0.25
    },
    "3": {
      "EffectHitRate": 0.3
    },
    "4": {
      "EffectHitRate": 0.35
    },
    "5": {
      "EffectHitRate": 0.4
    }
  },
  "abilityObject": {
    "BeforetheTutorialMissionStarts_Ability22000": {
      "fileName": "BeforetheTutorialMissionStarts_Ability22000",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "LC_22000_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_22000_Main",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_DefenceDown"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (4) || RETURN",
                        "displayLines": "4",
                        "constants": [],
                        "variables": [
                          4
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's Effect Hit Rate by #1[i]%. When the wearer attacks DEF-reduced enemies, regenerates #2[i] Energy.",
      "params": [
        [
          0.2,
          4
        ],
        [
          0.25,
          5
        ],
        [
          0.3,
          6
        ],
        [
          0.35,
          7
        ],
        [
          0.4,
          8
        ]
      ]
    }
  },
  "isLightcone": true
}