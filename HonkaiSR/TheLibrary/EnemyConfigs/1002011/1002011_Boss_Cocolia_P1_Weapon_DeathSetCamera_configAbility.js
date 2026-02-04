const configAbility = {
  "fileName": "1002011_Boss_Cocolia_P1_Weapon_DeathSetCamera",
  "skillTrigger": "PassiveSkill04",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Boss_Cocolia_P1_Weapon_DeathSetCamera"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Boss_Cocolia_P1_Weapon_DeathSetCamera",
      "execute": [
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "BOSS_COCOLIA_BOSS_MDF"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "WeaponDeathCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 2
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "WeaponDeathCount",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    "Deleted bullshit"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}