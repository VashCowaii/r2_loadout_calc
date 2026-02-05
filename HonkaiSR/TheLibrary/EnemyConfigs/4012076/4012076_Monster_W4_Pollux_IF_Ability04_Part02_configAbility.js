const configAbility = {
  "fileName": "4012076_Monster_W4_Pollux_IF_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "flagName": "Break"
      },
      "ifTargetFound": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "set": 0
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}