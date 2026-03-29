const configAbility = {
  "fileName": "5014011_BattleEvent_Monster_W5_Vtuber_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Add Target by Unique Identifier",
        "identifier": "W5_Vtuber_00"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1713929309\">Enemy_W5_Vtuber_MainStory_Ability03</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1869034007\">Enemy_W5_Vtuber_MuteUltra</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Add Target by Unique Identifier",
        "identifier": "W5_Vtuber_00"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2019186097\">Enemy_W5_Vtuber_Locking</a>"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Add Target by Unique Identifier",
        "identifier": "W5_Vtuber_00"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Monster_W5_Vtuber_Ability03_Part01",
      "isTrigger": true
    },
    "Wait for Pending Ability Completions",
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}