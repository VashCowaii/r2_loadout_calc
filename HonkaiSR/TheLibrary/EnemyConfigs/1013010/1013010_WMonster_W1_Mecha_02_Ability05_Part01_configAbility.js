const configAbility = {
  "fileName": "1013010_WMonster_W1_Mecha_02_Ability05_Part01",
  "childAbilityList": [
    "1013010_WMonster_W1_Mecha_02_Ability05_Camera",
    "1013010_WMonster_W1_Mecha_02_A_Ability05_Camera",
    "1013010_WMonster_W1_Mecha_02_Ability05_Part01",
    "1013010_WMonster_W1_Mecha_02_Ability05_Part02"
  ],
  "skillTrigger": "Skill05",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "WMonster_W1_Mecha_02_Ability05_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 1013011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Automaton Grizzly (Bug)"
          },
          {
            "name": "Enemy ID",
            "ID": 1013012,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Automaton Grizzly (Complete)"
          },
          {
            "name": "Enemy ID",
            "ID": 1013013,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Automaton Grizzly (Complete)"
          },
          {
            "name": "Enemy ID",
            "ID": 1013014,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Automaton Grizzly (Complete)"
          }
        ]
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit"
      ]
    }
  ],
  "references": []
}