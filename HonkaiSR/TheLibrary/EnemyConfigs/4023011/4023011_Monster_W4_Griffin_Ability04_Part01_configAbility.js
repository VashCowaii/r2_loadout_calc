const configAbility = {
  "fileName": "4023011_Monster_W4_Griffin_Ability04_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Noontide Gryphon: Skill04 Target}}"
        },
        "compareType": "=",
        "value2": 2,
        "livingTargets": true
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Player Team All}}"
                },
                {
                  "name": "Return Target",
                  "value": 1
                }
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W4_Griffin_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}